namespace <%= appNamespace %>.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';<% if(type === "Sample Data") { %>
        public movies;

        constructor(movieService:<%= appNamespace %>.Services.MovieService) {
            this.movies = movieService.listMovies();
        }<% } %>
    }

<% if(type === "Security") { %>
    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }
<% } %>

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
