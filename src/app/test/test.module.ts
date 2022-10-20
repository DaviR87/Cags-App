import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { SottotestComponent } from './sottotest/sottotest.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestComponent, 
    SottotestComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TestComponent]
})
export class TestModule { }
