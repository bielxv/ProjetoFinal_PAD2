import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormControl;

  email= '';
  senha: '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
      this.router.navigateByUrl('home')
  }

}
