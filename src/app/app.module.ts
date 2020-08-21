import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductListComponent } from './buyer/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './buyer/product-list/product-detail/product-detail.component';
import { ItemCardComponent } from './buyer/product-list/item-card/item-card.component';
import { SellItemFormComponent } from './seller/sell-item-form/sell-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAgePipe } from './pipes/get-age.pipe';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LandingPageComponent,
    ProductListComponent,
    ProductDetailComponent,
    ItemCardComponent,
    SellItemFormComponent,
    GetAgePipe,
    CheckoutCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: '', component: LandingPageComponent
    }, {
      path: 'buy', component: ProductListComponent
    }, {
      path: 'buy/:id', component: ProductDetailComponent
    },
    {
      path: 'sell', component: SellItemFormComponent
    },
    {
      path: 'cart', component: CheckoutCartComponent
    },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
