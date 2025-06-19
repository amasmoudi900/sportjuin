import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "allMatches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "teams", component: TeamsComponent },
  { path: "admin", component: AdminComponent },
  { path: "signup", component: SignupComponent },
  { path: "signupAdmin", component: SignupComponent },
  { path: "searchPlayer", component: SearchPlayerComponent },
  { path: "matchInfo/:id", component: MatchInfoComponent },
  { path: "editMatch/:id", component: EditMatchComponent },
  { path: "searchMatch", component: SearchMatchComponent },
  { path: "addStadium", component: AddStadiumComponent },
  { path: "playerInfo/:id", component: PlayerInfoComponent },
  { path: "editPlayer/:id", component: EditPlayerComponent },
  { path: "teamInfo/:id", component: TeamInfoComponent },
  { path: "editTeam/:id", component: EditTeamComponent },
  { path: "search", component: SearchComponent },
  { path: "searchWeather", component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
