import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DtLog, LogSeverity } from '../model/dtlog-model';

@Injectable({
  providedIn: 'root'
})
export class DtLogService {

  private dtLogEndpoint = "https://tyk57033.live.dynatrace.com/api/v2/logs/ingest";
  private apiToken = "dt0c01.LYI7Y2XWN2KVVT3LGELADBCY.246BUOLXRWQZF4YHKEROSG6Y3AIF6PTNISIUPJROP3FP2V4QFIKAXEYFSBYUJTZR";
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': "Api-Token " + this.apiToken
  });

  constructor(private http: HttpClient) { }

  dtLog(log: string, severity: LogSeverity = LogSeverity.Info) {
    const data = new DtLog(log, severity)
    return this.http.post(this.dtLogEndpoint, data, { headers: this.headers }
    )
  }
}
