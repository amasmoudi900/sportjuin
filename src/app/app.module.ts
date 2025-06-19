import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { InfoComponent } from './components/info/info.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { BannerComponent } from './components/banner/banner.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumsTableComponent } from './components/stadiums-table/stadiums-table.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { ChangeVowelPipe } from './pipes/change-vowel.pipe';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { SearchComponent } from './components/search/search.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    InfoComponent,
    StandingsComponent,
    BlogComponent,
    ArticleComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    SearchPlayerComponent,
    MatchInfoComponent,
    BannerComponent,
    EditMatchComponent,
    SearchMatchComponent,
    AddStadiumComponent,
    StadiumsTableComponent,
    CustomFilterPipe,
    ChangeVowelPipe,
    PlayerInfoComponent,
    EditPlayerComponent,
    TeamInfoComponent,
    EditTeamComponent,
    TestComponent,
    SearchComponent,
    UsersTableComponent,
    WeatherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
