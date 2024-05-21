import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { InstagramComponent } from './components/common/instagram/instagram.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { GalleryComponent } from './components/common/gallery/gallery.component';
import { CallToActionComponent } from './components/common/call-to-action/call-to-action.component';
import { ChefsComponent } from './components/common/chefs/chefs.component';
import { BookTableComponent } from './components/common/book-table/book-table.component';
import { RestaurantMenuComponent } from './components/common/restaurant-menu/restaurant-menu.component';
import { VideoComponent } from './components/common/video/video.component';
import { StunningThingsComponent } from './components/common/stunning-things/stunning-things.component';
import { AboutComponent } from './components/common/about/about.component';
import { OfferComponent } from './components/common/offer/offer.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { BookATablePageComponent } from './components/pages/book-a-table-page/book-a-table-page.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomefiveBannerComponent } from './components/pages/home-demo-five/homefive-banner/homefive-banner.component';
import { HomesixBannerComponent } from './components/pages/home-demo-six/homesix-banner/homesix-banner.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        InstagramComponent,
        ContactComponent,
        PartnerComponent,
        BlogComponent,
        FeedbackComponent,
        FeaturesComponent,
        GalleryComponent,
        CallToActionComponent,
        ChefsComponent,
        BookTableComponent,
        RestaurantMenuComponent,
        VideoComponent,
        StunningThingsComponent,
        AboutComponent,
        OfferComponent,
        HomeoneBannerComponent,
        NavbarComponent,
        BookATablePageComponent,
        PrivacyPolicyComponent,
        TermsConditionsComponent,
        NotFoundComponent,
        HometwoBannerComponent,
        HomeDemoThreeComponent,
        HomeDemoFourComponent,
        HomethreeBannerComponent,
        HomefourBannerComponent,
        HomeDemoFiveComponent,
        HomeDemoSixComponent,
        HomefiveBannerComponent,
        HomesixBannerComponent,
        BlogPageComponent,
        BlogDetailsPageComponent,
        OrderPageComponent,
        MyAccountComponent,
        ForgotPasswordComponent,
        ChangePasswordComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        NgxScrollTopModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }