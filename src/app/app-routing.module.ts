import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BookATablePageComponent } from './components/pages/book-a-table-page/book-a-table-page.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'index-4', component: HomeDemoFourComponent},
    {path: 'index-5', component: HomeDemoFiveComponent},
    {path: 'index-6', component: HomeDemoSixComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'order', component: OrderPageComponent},
    {path: 'my-account', component: MyAccountComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'change-password', component: ChangePasswordComponent},
    {path: 'book-a-table', component: BookATablePageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    // Here add new pages component
    
    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
