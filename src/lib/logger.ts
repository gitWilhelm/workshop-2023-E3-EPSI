import fmt from "chalk"

const log_status = {
    OK: {
        str: "[OK]",
        display: `${fmt.gray('[')}${fmt.green('OK')}${fmt.gray(']')}`
    },
    ERR: {
        str: "[ERR]",
        display: `${fmt.gray('[')}${fmt.red('ERR')}${fmt.gray(']')}`
    },
    WARN: {
        str: "[WARN]",
        display: `${fmt.gray('[')}${fmt.yellow('WARN')}${fmt.gray(']')}`
    },
    INFO: {
        str: "[INFO]",
        display: `${fmt.gray('[')}${fmt.blue('INFO')}${fmt.gray(']')}`
    }
}

interface LogData {
    body: string
    status: { str: string, display: string }
}

export function logOK(body: string) {
    makeLog({body, status: log_status.OK})
}

export function logERR(body: string) {
    makeLog({body, status: log_status.ERR})
}

export function logWARN(body: string) {
    makeLog({body, status: log_status.WARN})
}

export function logINFO(body: string) {
    makeLog({body, status: log_status.INFO})
}

function makeLog(log_data: LogData) {
    let log = log_data.status.str.padStart(6, ' ')
    log = log.replace(log_data.status.str, log_data.status.display)
    log = `${log} ${log_data.body}`
    console.log(log)
}