"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //you import this in order to use the @component decorator on line 3
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        //Output declares an event-bound output property
        this.editClicked = new core_1.EventEmitter(); //catches events in Angular2
    }
    MessageComponent.prototype.onEdit = function () {
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMessage(this.message)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    MessageComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') == this.message.userId;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "                  \n                 <article class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        {{ message.content }}\n                    </div>\n                    <footer class=\"panel-footer\">\n                        <div class=\"author\">\n                        {{ message.username}}\n                        </div>              \n                        <div class=\"config\" *ngIf=\"belongsToUser()\">\n                            <a (click)=\"onEdit()\">Edit</a> <!--event listener-->\n                            <a (click)=\"onDelete()\">Delete</a>\n                        </div>             \n                    </footer>\n                 </article>\n    "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUEsQ0FBQyxvRUFBb0U7QUFDNUksd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBdUJqRDtJQUlJLDBCQUFxQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFGcEQsZ0RBQWdEO1FBQ3RDLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUMsQ0FBQyw0QkFBNEI7SUFDekIsQ0FBQztJQUN4RCxpQ0FBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUE7SUFDVCxDQUFDO0lBQ0Qsd0NBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUM7SUFoQkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBdkJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSwwdEJBZVQ7U0FDSixDQUFDOzt3QkFBQTtJQXFCRix1QkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksd0JBQWdCLG1CQW1CNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7IC8veW91IGltcG9ydCB0aGlzIGluIG9yZGVyIHRvIHVzZSB0aGUgQGNvbXBvbmVudCBkZWNvcmF0b3Igb24gbGluZSAzXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXG4gICAgdGVtcGxhdGU6IGAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UudXNlcm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIiAqbmdJZj1cImJlbG9uZ3NUb1VzZXIoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+IDwhLS1ldmVudCBsaXN0ZW5lci0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xuICAgIC8vT3V0cHV0IGRlY2xhcmVzIGFuIGV2ZW50LWJvdW5kIG91dHB1dCBwcm9wZXJ0eVxuICAgIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpOyAvL2NhdGNoZXMgZXZlbnRzIGluIEFuZ3VsYXIyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cbiAgICBvbkVkaXQoKSB7XG4gICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcbiAgICB9XG4gICAgb25EZWxldGUoKSB7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmRlbGV0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuICAgIGJlbG9uZ3NUb1VzZXIoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgID09IHRoaXMubWVzc2FnZS51c2VySWQ7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
