namespace <%= appNamespace %>.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';<% if(type === "Sample Data") { %>
        public movies;

        constructor(movieService:<%= appNamespace %>.Services.MovieService) {
            this.movies = movieService.listMovies();
        }<% } %>
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
