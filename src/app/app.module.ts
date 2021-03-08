import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ToolReadComponent } from './tools/tool-read/tool-read.component';
import { ToolCreateComponent } from './tools/tool-create/tool-create.component';
import { ToolDeleteComponent } from './tools/tool-delete/tool-delete.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToolReadComponent,
    ToolCreateComponent,
    ToolDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
