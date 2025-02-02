import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { BooksComponent } from './components/books/books.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminTransactionComponent } from './components/admin-transaction/admin-transaction.component';
import { AdminMembersComponent } from './components/admin-members/admin-members.component';
import { BranchComponent } from './components/branch/branch.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent, data: { title: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard], data: { title: 'Books' } },
  { path: 'member-dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { title: 'Member Dashboard' } },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { title: 'Admin Dashboard' } },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard], data: { title: 'User Profile' } },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard], data: { title: 'User Transactions' } },
  { path: 'admin-transactions', component: AdminTransactionComponent, canActivate: [AuthGuard], data: { title: 'Transactions' } },
  { path: 'admin-members', component: AdminMembersComponent, canActivate: [AuthGuard], data: { title: 'Members' } },
  { path: 'branches', component: BranchComponent, canActivate: [AuthGuard], data: { title: 'Branches' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
