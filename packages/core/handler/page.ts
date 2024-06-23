// import { perm } from '../declare/perm';
import { ceil } from 'lodash';
import { Handler, Route } from '../handle';
// import * as fs from 'fs';
// import * as path from 'path';
import { RenderFromPage } from '../service/render';
import axios from 'axios';

class MainPageHandler extends Handler {
    async get() {
        const d = (await axios.get(global.Project.api)).data;
        const pd = (await axios.get(global.Project.apidd)).data;
        let allsuccess = true;
        for (const key in pd.heartbeatList) {
            if (pd.heartbeatList[key].length > 0) {
                if (pd.heartbeatList[key][pd.heartbeatList[key].length - 1].status === 0) {
                    allsuccess = false;
                }
            }
        }
        // get sdata from d and sd
        const sdata = [];

        //updtime utc to utc+8
        for (const key in pd.heartbeatList) {
            for (const item of pd.heartbeatList[key]) {
                item.time = new Date(`${item.time} UTC`).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
            }
        }
        for (const group of d.publicGroupList) {
            const groupdata = {
                group: group.name,
                source: 'kuma',
                status: 'online',
                child: []
            };
            for (const monitor of group.monitorList) {
                const key = monitor.id.toString();
                if (pd.heartbeatList[key][pd.heartbeatList[key].length - 1].status !== 1) {
                    groupdata.status = 'down';
                }
                const monitordata = {
                    name: monitor.name,
                    status: pd.heartbeatList[key][pd.heartbeatList[key].length - 1].status === 1 ? 'online' : 'down',
                    uptime: "100.00%",
                    cert: `${monitor.certExpiryDaysRemaining}天`,
                    type: monitor.type,
                    link: monitor.url,
                    details: []
                };
                let status1n = 0;
                for (let i = 0; i < 50; i++) {
                    monitordata.details.push({
                        ping: `${pd.heartbeatList[key][i].ping}ms`,
                        status: pd.heartbeatList[key][i].status === 1 ? 'online' : 'down'
                    });
                    monitordata.details.push({
                        ping: `${pd.heartbeatList[key][i].ping}ms`,
                        status: pd.heartbeatList[key][i].status === 1 ? 'online' : 'down'
                    });
                    if (pd.heartbeatList[key][i].status === 1) {
                        status1n++;
                    }
                }
                monitordata.uptime = `${ceil(status1n / 50 * 100)}.00%`;
                groupdata.child.push(monitordata);
                if (monitor.validCert === false) {
                    monitordata.cert = '已过期';
                }
                if (monitor.sendUrl === 0) {
                    monitordata.link = '不显示';
                }
            }
            sdata.push(groupdata);
        }
        const res = {
            iss: allsuccess,
            updtime: pd.heartbeatList['1'][pd.heartbeatList['1'].length - 1].time,
            sdata
        };
        this.ctx.type = 'text/html';
        this.ctx.body = await RenderFromPage(res);
        return;
    }
}

export function apply() {
    Route('HomePage', '/', MainPageHandler);
}