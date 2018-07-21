import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'wm-handler',
  template: '',
  styles: []
})
export class HandlerComponent implements OnInit {

  constructor(private router : Router, 
              private route : ActivatedRoute) { }

  ngOnInit() {

    // Intercept the firebase handler parameters
    this.route.queryParamMap.subscribe( (params: ParamMap ) => {

      let mode = params.get('mode');
      let code = params.get('oobCode');
      let api  = params.get('apiKey');
      let lang = params.get('lang') || 'en';
      let url  = params.get('continueUrl');

        //...and navigate to the login page with the requested language
        this.router.navigate([lang,'login'], { 
          queryParams: { mode, code },
          replaceUrl: true
        });
      }
    );
  }
}