(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/etienne/Documents/git/enrol/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");















function AppComponent_mat_card_44_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_mat_card_44_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_mat_card_44_Template_mat_card_title_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7); const course_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r6.showModal(course_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, AppComponent_mat_card_44_mat_icon_12_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_mat_card_44_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7); const course_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r8.showModal(course_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, " More Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, " Share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const course_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMapInterpolate1"]("complete-", course_r3.complete, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](course_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", course_r3.subTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", course_r3.points, " points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMap"]("req-" + course_r3.needReq);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", course_r3.prereq, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", course_r3.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("disabled", course_r3.complete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", course_r3.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", course_r3.description, "");
} }
class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.title = 'enrol';
        this.courses = [
            {
                title: 'DESIGN 100',
                subTitle: 'Design Methods and Processes 1',
                points: 30,
                description: 'Introduces students to key tools, methods and processes of design planning, strategy and practice. Students learn to apply design thinking and technologies to real world contexts and issues. A course of studio???based study focused on a series of creative, hands-on projects and supported by lectures. The emphasis is on human-centred design and interventions.',
                stars: Array(5).fill(4),
                required: true,
                prereq: ' ',
                complete: true,
                status: 'enrolled',
            },
            {
                title: 'DESIGN 101',
                subTitle: 'Why We Design',
                points: 15,
                description: 'Investigates design as a driver and responder to social needs in contemporary and historic contexts. Students will understand relevant technologies and their contexts. The course explicitly considers planetary limits and sustainability, as well as design and business considered in a social-technological, tikanga M??ori, financial, cultural-ethical and environmental context.',
                stars: Array(4).fill(4),
                required: true,
                prereq: ' ',
                complete: true,
                status: 'enrolled',
            },
            {
                title: 'DESIGN 200',
                subTitle: 'Design Methods and Processes 2',
                points: 30,
                description: 'An intermediate studio-based programme in which students develop a customised design strategy in response to a real-world issue. By working on a detailed case study, students learn to address local issues and engage with the local design community. Students present their design solutions, and learn to pitch design concepts and evaluate potential outcomes.',
                stars: Array(2).fill(4),
                required: true,
                prereq: 'Prerequisite: DESIGN 100, 101',
                complete: false,
                needReq: 'false',
                status: 'Add to cart',
            },
            {
                title: 'DESIGN 201',
                subTitle: 'Creative Communities',
                points: 15,
                description: 'Students analyse and discuss the ???design difference??? by understanding design as both problem and (potential) solution to one or more identified social issues. Attention is paid to the economic and ethical implications of design with emphasis on value chains and Triple Bottom Line practices.',
                stars: Array(1).fill(4),
                required: true,
                prereq: 'Prerequisite: DESIGN 100, 101',
                complete: false,
                needReq: 'false',
                status: 'Add to cart',
            },
            {
                title: 'DESIGN 300',
                subTitle: 'Design Research Methodologies',
                points: 15,
                description: 'Introduction to a range of key design methodologies that inform contemporary design thinking, research and practice, within New Zealand, with reference to M??ori philosophies of making and community. Drawing on methodological principles, students learn how to develop design strategies, apply design processes and test their design concepts. Consideration will be given to the phasing and planning of design investigations from data analytics to design concepts to practical methods and proposed solutions.',
                stars: Array(1).fill(4),
                required: true,
                prereq: 'Prerequisite: DESIGN 200, 201, 300 and 90 points from DESIGN 210-243',
                complete: false,
                needReq: 'true',
                status: 'Concession',
            },
            {
                title: 'DESIGN 301',
                subTitle: 'Advanced Design Methods Capstone',
                points: 45,
                description: 'An advanced course in which students complete a major design project in collaboration with a local design professional. The task is to develop a design strategy in response to a real-world issue. Students will engage in research and practical studio work; use multiple tools, technologies and methods; and work in teams. Outcomes will be exhibited, and critiqued by design professionals.',
                stars: Array(1).fill(4),
                required: true,
                prereq: 'Prerequisite: DESIGN 200, 201, 300 and 90 points from DESIGN 210-243',
                complete: false,
                needReq: 'true',
                status: 'Concession',
            },
            {
                title: 'DESIGN 302',
                subTitle: 'Critical-Technical Positioning',
                points: 15,
                description: 'An advanced course in which students produce a written account of their capstone project (DESIGN 301). The account will take the form of a 5,000 word essay or technical report, with visual evidence. It will provide a critical contextualisation of the capstone project within the field of design, and use design theory to describe the project from concept to execution.',
                stars: Array(1).fill(4),
                required: true,
                prereq: 'DESIGN 200, 201, 300',
                complete: false,
                needReq: 'true',
                status: 'Concession',
            },
        ];
    }
    showModal(course) {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"], { data: course });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 49, vars: 4, consts: [["autosize", "", 1, "side-container"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], ["matRipple", ""], ["mat-raised-button", "", "color", "primary"], [1, "body"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [3, "click"], [1, "example-spacer"], ["mat-icon-button", "", "matTooltip", "Enrolment cart", "aria-label", "Example icon-button with heart icon", 1, "cart"], ["matBadge", "1"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["mat-button", ""], ["aria-hidden", "false", "aria-label", "Example pencil icon"], [1, "center"], ["chipList", ""], [3, "selectable", "removable"], ["matChipRemove", ""], ["placeholder", "Filter courses", 3, "matChipInputFor"], [1, "courses"], [3, "class", 4, "ngFor", "ngForOf"], ["mat-fab", "", "color", "primary", "matTooltip", "Get help", 1, "fab"], ["mat-card-avatar", "", 1, "example-header-image"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "enrol-now", 3, "disabled"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "My timetable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "My degree requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Change degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Course catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Concessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "My grades");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_Template_mat_icon_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Hi Fredrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, " Your currently Studying towards a BDes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-chip-list", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Core courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, AppComponent_mat_card_44_Template, 24, 13, "mat-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "router-outlet");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("selectable", true)("removable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matChipInputFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.courses);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadge"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipInput"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardActions"]], styles: [".planner[_ngcontent-%COMP%] {\n  background-image: url('planner.png');\n  width: 100vw;\n  height: 100vh;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 121px;\n  height: 115px;\n  position: fixed;\n  z-index: 3;\n  left: 156px;\n  top: 167px;\n  background-image: url('110.png');\n  transition: 0.2s ease;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.chat[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: #222;\n  right: 40px;\n  bottom: 0;\n  width: 161px;\n  height: 20px;\n  padding: 40px;\n  font-weight: bold;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  color: white;\n  text-align: center;\n  font-size: x-large;\n  transition: 0.2s ease;\n}\n\n.chat[_ngcontent-%COMP%]:hover {\n  height: 40px;\n}\n\n.bottom[_ngcontent-%COMP%], .side[_ngcontent-%COMP%] {\n  background-color: white;\n  position: fixed;\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n}\n\n.body[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 200px;\n}\n\n.body[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 50px;\n}\n\n.body[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 70px;\n  bottom: 70px;\n}\n\n.body[_ngcontent-%COMP%]   .side-container[_ngcontent-%COMP%] {\n  height: 100%;\n  position: fixed;\n}\n\n.courses[_ngcontent-%COMP%] {\n  width: 85%;\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n\n.courses[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 22%;\n  margin: 0.5%;\n  margin-bottom: 40px;\n}\n\n.courses[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.courses[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.courses[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .enrol-now[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  right: 40px;\n  position: absolute;\n  color: white !important;\n}\n\n.courses[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .enrol-now[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.courses[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .req-true[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.courses[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .req-false[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.courses[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.courses[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.courses[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  color: #00467f;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  align-content: center;\n  display: flex;\n}\n\n.mat-drawer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 30px;\n  margin: 0;\n  border-bottom: #888 solid 1px;\n  cursor: pointer;\n}\n\n.mat-drawer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 65px;\n  margin-top: 30px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSx1QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUVFO0VBQ0Usb0JBQUE7QUFBSjs7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUlFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU9BO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBaUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXBDRjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFFSTtFQUNFLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtBQUROOztBQUdNO0VBQ0UsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBRFI7O0FBR1E7RUFDRSx1QkFBQTtBQURWOztBQUtNO0VBQ0UsVUFBQTtBQUhSOztBQU1NO0VBQ0UsWUFBQTtBQUpSOztBQVlFO0VBQ0UsdUJBQUE7QUFWSjs7QUFZSTtFQUNFLHVCQUFBO0FBVk47O0FBY0U7RUFDRSxjQUFBO0FBWko7O0FBZ0JBO0VBRUUscUJBQUE7RUFDQSxhQUFBO0FBZEY7O0FBZUU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQWJKOztBQWVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQWJKOztBQWlCQTtFQUNFLGFBQUE7QUFkRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhbm5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzL3BsYW5uZXIucG5nXCIpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMTIxcHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMztcbiAgbGVmdDogMTU2cHg7XG4gIHRvcDogMTY3cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzLzExMC5wbmdcIik7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmNoYXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIHJpZ2h0OiA0MHB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxNjFweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLmNoYXQ6aG92ZXIge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5ib3R0b20sXG4uc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuXG4gICAgLmNhcnQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDUwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZhYiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiA3MHB4O1xuICAgIGJvdHRvbTogNzBweDtcbiAgfVxuXG4gIC5zaWRlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxufVxuXG4uY291cnNlcyB7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDIyJTtcbiAgICBtYXJnaW46IDAuNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuXG4gICAgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgIC5lbnJvbC1ub3cge1xuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblxuICAgICAgICAqIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmVxLXRydWUge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuXG4gICAgICAucmVxLWZhbHNlIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5ibHVlLWJ0biB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAqIHtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICMwMDQ2N2Y7XG4gIH1cbn1cblxuLm1hdC1kcmF3ZXIge1xuICAvLyBwYWRkaW5nLXRvcDogMjBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItYm90dG9tOiAjODg4IHNvbGlkIDFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNjVweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "XwkG":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");








function ModalComponent_mat_icon_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class ModalComponent {
    constructor(course) {
        this.course = course;
        console.log(course);
    }
    ngOnInit() { }
}
ModalComponent.??fac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 168, vars: 11, consts: [[1, "mat-typography", "relative"], ["src", ""], ["mat-raised-button", "", "color", "primary", 1, "white-text", "enrol"], [1, "paragraph"], [1, "past-papers", "hover", "no-active", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-file-earmark-arrow-down-fill", "hover"], ["d", "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"], [4, "ngFor", "ngForOf"], [1, "graph"], [1, "row", "hover"], [1, "bar5"], [1, "bar4"], [1, "row"], [1, "bar3"], [1, "bar2"], [1, "bar1"], [1, "example-headers-align"], [3, "expanded"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-star-fill"], ["d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"], ["src", "../../assets/timtable.png", 1, "timetable"], ["src", "../../assets/map.png"], [1, "flex"], [1, "small", "person-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "../../assets/human.jpeg", "alt", "Photo of Robert"], ["mat-button", ""], ["mat-card-image", "", "src", "../../assets/person.jpeg", "alt", "Photo of Robert"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Enrol Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " Past Papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, ModalComponent_mat_icon_16_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "mat-accordion", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, " Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, " Past Students Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "TERRIBLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](54, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "I HATE THIS COURSE ITS BAD!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "AMAZING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](62, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](64, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](68, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](70, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "BEST COURSE EVER!!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, " Syllabus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, " Course Outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Learning Outcomes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, " describe the layers of a computer system, from hardware to the web (1, 4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, " convert standard data types into numeric formats and apply simple functions to them (1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, " identify basic gates and be able to relate them to truth tables and simple combinational circuits (1, 2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, " trace the execution of simple programs at the assembly language level (1, 2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, " produce pseudocode to specify solutions to simple programming tasks (1, 2, 3) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, " describe the fundamental parts of an operating system and how they relate to applications (1, 4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, " demonstrate an understanding of network communications and computer security (1, 4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, " explain the central ideas in computer science research areas (such as artificial intelligence, computer graphics and theory) (1, 4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, " discuss ethical issues arising from the use of computers in society (4, 5, 6) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Assignments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, " Exam 50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, " Test 20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, " 8 tutorials with group work 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, " 4 standard assignments @ 3% each 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, " 4 assignments with essays @ 4% each 16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, " Timetable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](117, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](118, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, " People ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](126, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, " Dr Person Personson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "Course director and lecturer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](131, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, " Specialising in computer graphics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, " e: email@auckland.ac.nz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, " p: 0220 002 220");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, " office: 303s-499 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](148, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](150, " Dr Human");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Course co-ordinator and lecturer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](153, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](156, " Specialising in AI and ML");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, " e: human@auckland.ac.nz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, " p: 0220 222 000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, " office: 303s-498 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.course.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.course.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.course.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("href", "https://www.library.auckland.ac.nz/search/", ctx.course.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.course.stars);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"]], styles: [".graph[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100px;\n  margin-bottom: 50px;\n}\n\n.bar5[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 15px;\n  margin-left: 10px;\n  background-color: #005daa;\n}\n\n.bar4[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 15px;\n  margin-left: 10px;\n  background-color: #005daa;\n}\n\n.bar3[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 15px;\n  margin-left: 10px;\n  background-color: #005daa;\n}\n\n.bar2[_ngcontent-%COMP%] {\n  width: 6%;\n  margin-left: 10px;\n  height: 15px;\n  background-color: #005daa;\n}\n\n.bar1[_ngcontent-%COMP%] {\n  width: 4%;\n  height: 15px;\n  margin-left: 10px;\n  background-color: #005daa;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #ddddff;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: #ffddff;\n}\n\n.paragraph[_ngcontent-%COMP%] {\n  width: 75ch;\n}\n\n.small[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.person-card[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.past-papers[_ngcontent-%COMP%], .past-papers[_ngcontent-%COMP%]:active {\n  text-decoration: none !important;\n  font-weight: bold !important;\n  color: #555 !important;\n}\n\n.hover[_ngcontent-%COMP%] {\n  transition: 0.2s ease;\n}\n\n.hover[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n.no-active[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.enrol[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  right: 50px;\n}\n\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.timetable[_ngcontent-%COMP%] {\n  padding-right: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUNBOztFQUVFLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7QUFFRiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaCB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5iYXI1IHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWRhYTtcbn1cbi5iYXI0IHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGFhO1xufVxuLmJhcjMge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWE7XG59XG4uYmFyMiB7XG4gIHdpZHRoOiA2JTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWRhYTtcbn1cbi5iYXIxIHtcbiAgd2lkdGg6IDQlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWE7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZGRkZGZmO1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZmZGRmZjtcbn1cblxuLnBhcmFncmFwaCB7XG4gIHdpZHRoOiA3NWNoO1xufVxuXG4uc21hbGwge1xuICB3aWR0aDogMzAlO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGVyc29uLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnBhc3QtcGFwZXJzLFxuLnBhc3QtcGFwZXJzOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xufVxuXG4uaG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5ob3Zlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLm5vLWFjdGl2ZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5lbnJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogNTBweDtcbn1cblxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGltZXRhYmxlIHtcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _materials_materials_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materials/materials.module */ "bZ3k");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _materials_materials_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _materials_materials_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]] }); })();


/***/ }),

/***/ "bZ3k":
/*!***********************************************!*\
  !*** ./src/app/materials/materials.module.ts ***!
  \***********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ "fXoL");






// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables




class MaterialModule {
}
MaterialModule.??fac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_41__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_41__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_41__["????setNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map