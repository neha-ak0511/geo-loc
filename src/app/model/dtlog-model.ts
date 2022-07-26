export class DtLog {
    "content": string;
    "log.source"?: string;
    // "timestamp"?: any;
    "severity"?: LogSeverity;
    // "custom.attribute"?: string;
    constructor(content: string, severity: LogSeverity) {
        this.content = content;
        this.severity = severity;
        // this.timestamp = + new Date();
        this["log.source"] = "N/A"
    }
}
export enum LogSeverity {
    Warn = "warn",
    Info = "info",
    Debug = "debug",
    Error = "error"
}

