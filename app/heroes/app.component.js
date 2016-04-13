System.register(['../../node_modules/angular2/core.d', '../../node_modules/angular2/router.d', './../crisis-list.component.ts', './../hero-list.component.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_d_1, router_d_1, crisis_list_component_ts_1, hero_list_component_ts_1;
    var AppComponent;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            },
            function (router_d_1_1) {
                router_d_1 = router_d_1_1;
            },
            function (crisis_list_component_ts_1_1) {
                crisis_list_component_ts_1 = crisis_list_component_ts_1_1;
            },
            function (hero_list_component_ts_1_1) {
                hero_list_component_ts_1 = hero_list_component_ts_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_d_1.Component({
                        selector: 'my-app',
                        template: "\n   <div>\n      <nav class=\"navbar navbar-default\">\n          <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n              <a class=\"navbar-brand\" href=\"#\">Udemy Course Tracker</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                <li><a [routerLink]=\"['CrisisCenter']\">Crisis Center</a></li>\n               <li><a [routerLink]=\"['Heroes']\">Heroes</a></li>\n              </ul>\n            </div>\n          </div>\n      </nav>\n      <div>\n        <router-outlet></router-outlet>\n      </div>\n  </div>\n\n\n    <!--<div class=\"navbar-header\">-->\n              <!--<a class=\"navbar-brand\" href=\"#\">Udemy Course Tracker</a>-->\n            <!--</div>-->\n    <!--<nav>-->\n      <!--<a [routerLink]=\"['CrisisCenter']\">Crisis Center</a>-->\n      <!--<a [routerLink]=\"['Heroes']\">Heroes</a>-->\n    <!--</nav>-->\n    <!--<router-outlet></router-outlet>-->\n\n\n\n  ",
                        directives: [router_d_1.ROUTER_DIRECTIVES]
                    }),
                    router_d_1.RouteConfig([
                        { path: '/crisis-center', name: 'CrisisCenter', component: crisis_list_component_ts_1.CrisisListComponent },
                        { path: '/heroes', name: 'Heroes', component: hero_list_component_ts_1.HeroListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map