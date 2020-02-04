import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../../models/recipe.model';
import {Observable} from 'rxjs';

@Injectable()
export class RecipesValidationService {
  private readonly getRecipesUrl: string;
  private readonly validateRecipeUrl: string;
  private ret: string;
  constructor(private http: HttpClient) {
    this.getRecipesUrl = 'http://localhost:8080/getRecipesForValidation';
    this.validateRecipeUrl = 'http://localhost:8080/validateRecipe';
  }

  getRecipes(email: string): Observable<Set<Recipe>> {
    return this.http.get<Set<Recipe>>(this.getRecipesUrl + '/' + email + '/');
  }

  validateRecipe(id: BigInteger): Observable<any> {
    this.ret = id.toString();
    return this.http.post<any>(this.validateRecipeUrl + '/' + this.ret + '/', {});
  }
}
