import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class VehicleService {
  readonly BASE_URL = `https://6080be3273292b0017cdbf2a.mockapi.io`;

  /**
   *  @param {type} String type of entity
   *  @returns Returns API url for the given types
   */
  getUrl = (type: string) => `${this.BASE_URL}/${type}`;

  constructor(private http: HttpClient) {}

  /**
   * @returns An array of years
   */
  getYears(): Observable<any> {
    return this.http.get(this.getUrl("years"));
  }

  getMakes(year: string): Observable<any> {
    return this.http.get(this.getUrl("makes"), {
      params: {
        year
      }
    });
  }

  getModels(year: string, make: string): Observable<any> {
    return this.http.get(this.getUrl("models"), {
      params: {
        year,
        make
      }
    });
  }

  // TODO
  // Write service calls for make, model and trim
}
