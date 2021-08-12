import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Utility } from './utility.service';
export class BaseCRUDService {
  protected http: HttpClient;

  constructor(http: HttpClient, protected restUrl: string) {
    this.http = http;
  }

  post(jsonData: any): any {
    jsonData = this.convertToModel(jsonData);

    return this.http.post<any>(this.restUrl, jsonData, {
      reportProgress: true
    }).pipe(map(data => {
      return data;
    }));
  }

  put(jsonData: { id: string; }): any {
    jsonData = this.convertToModel(jsonData);
    return this.http.put(this.restUrl + '/' + jsonData.id, jsonData).pipe(map((res: any) => res));
  }

  putWithParameter(jsonData: { id: string; }, status?: string, urlParam?: any): any {
    jsonData = this.convertToModel(jsonData);
    if (!Utility.isUndefinedOrNull(status)) {
      return this.http.put(this.restUrl + '/' + jsonData.id + '/' + status,
        jsonData).pipe(map((res: any) => res));
    } else if (!Utility.isUndefinedOrNull(urlParam)) {
      return this.http.put(this.restUrl + '?' + urlParam, jsonData).pipe(map((res: any) => res));
    } else {
      return this.http.put(this.restUrl, jsonData).pipe(map((res: any) => res));
    }
  }


  delete(id: any): any {
    return this.http.delete(`${this.restUrl}/${id}`).pipe(map((res: any) => res));
  }

  get(params: HttpParams): any {
    return this.http.get(this.restUrl, {
      params
    }).pipe(map((res: any) => {
      if (res.content && res.content instanceof Array) {
        for (let i = 0; i < res.content.length; i++) {
          res.content[i] = this.convertToModelView(res.content[i]);
        }
      }
      return res;
    }));
  }

  getById(id: any): Observable<any> {
    return this.http.get(this.restUrl + '/' + id).pipe(map((res: any) => this.convertToModelView(res)));
  }

  getByIdWithParams(id: any, params: HttpParams): Observable<any> {
    return this.http.get(this.restUrl + '/' + id, {
      params
    }).pipe(map((res: any) => this.convertToModelView(res)));
  }

  getByIdValue(id: any, val: string): Observable<any> {
    return this.http.get(this.restUrl + '/' + id + '/' + val).pipe(map((res: any) => this.convertToModelView(res)));
  }

  getByIdValueWithParams(id: any, val: string , params: HttpParams): Observable<any> {
    return this.http.get(this.restUrl + '/' + id + '/' + val, {
      params
    }).pipe(map((res: any) => this.convertToModelView(res)));
  }
  getBySearchCriteria(q: any, sortBy: any, pageNumber: any, pageSize: any, paramArray?: any[]): Observable<any> {
    let params = new HttpParams();
    if (!Utility.isUndefinedOrNull(q)) {
      params = params.set('q', q);
    }
    if (!Utility.isUndefinedOrNull(sortBy)) {
      params = params.set('sort', sortBy);
    }
    if (!Utility.isUndefinedOrNull(pageNumber)) {
      params = params.set('page', (pageNumber - 1) + '');
    }
    if (!Utility.isUndefinedOrNull(pageSize)) {
      params = params.set('size', pageSize + '');
    }
    if (!Utility.isUndefinedOrNull(paramArray)) {
      // @ts-ignore
      if (paramArray.length) {
        // @ts-ignore
        paramArray.forEach((item) => {
          params = params.set(item.paramKey, item.paramValue + '');
        });
      }
    }
    return this.http.get(this.restUrl, {
      params
    }).pipe(map((res: any) => {
      if (res.content && res.content instanceof Array) {
        for (let i = 0; i < res.content.length; i++) {
          res.content[i] = this.convertToModelView(res.content[i]);
        }
      }
      return res;
    }));
  }

  convertToModelView(model: any): any {
    return model;
  }

  convertToModel(modelView: any): any {
    return modelView;
  }

  assignField(m: any, dst: string, src: string): any {
    m[dst] = m[src];
    delete m[src];
  }


  createHeaders(): any {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('X-USER-ID', '1');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

}
