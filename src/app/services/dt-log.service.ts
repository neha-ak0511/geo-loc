import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DtLog, LogSeverity } from '../model/dtlog-model';

@Injectable({
  providedIn: 'root'
})
export class DtLogService {

  private dtLogEndpoint = "https://tyk57033.live.dynatrace.com/api/v2/logs/ingest";
  private apiToken = "";
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
