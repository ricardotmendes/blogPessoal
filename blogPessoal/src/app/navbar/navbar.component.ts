import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService,
    //public pois vai aparecer ou não na tela
  ) { }

  ngOnInit() {
  }

  //método para sair do site
sair() {
  
  this.router.navigate(['/login'])
  environment.token =''
}
}
