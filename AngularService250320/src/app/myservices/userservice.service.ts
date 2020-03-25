import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  getAllUsers2(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/sba/api/employees")
      .pipe(retry(1), catchError(this.handleErrorType));
  }
  handleError(err) {
    return throwError(err);
    //use following inConsumerMethod .subscribe((data)=>{this.noError=true;this.employees=data},(error)=>{this.noError=false; this.errMsg=error});
    //(error)=>{this.noError=false; this.errMsg=error.message}
  }
  handleErrorType(err) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${err.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    //console.log(errorMessage);
    return throwError(errorMessage);
    //use following inConsumerMethod .subscribe((data)=>{this.noError=true;this.employees=data},(error)=>{this.noError=false; this.errMsg=error.message});
    //(error)=>{this.noError=false; this.errMsg=error.message}
  }


  getAllUsers(): any[] {
    return [
      { id: 101, name: "john12", city: "Dhaka", salary: 2000, dob: new Date("12/25/1980") },
      { id: 102, name: "john", city: "Dhaka", salary: 2000, dob: new Date("12/25/1980") },
      { id: 103, name: "john", city: "Dhaka", salary: 2000, dob: new Date("12/25/1980") },
      { id: 104, name: "john", city: "Dhaka", salary: 2000, dob: new Date("12/25/1980") },
      { id: 105, name: "john", city: "Dhaka", salary: 2000, dob: new Date("12/25/1980") },
      { id: 106, name: "john", city: "Dhaka", salary: 2000, dob: new Date("12/25/1980") },
      { id: 107, name: "john", city: "Dhaka", salary: 2000, dob: new Date("12/25/1980") }
    ]
  }
}
