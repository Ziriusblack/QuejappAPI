import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  async onLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor completa todos los campos';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const { error } = await this.supabaseService.signIn(this.email, this.password);

    this.loading = false;

    if (error) {
      this.errorMessage = 'Error al iniciar sesión: ' + error.message;
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
