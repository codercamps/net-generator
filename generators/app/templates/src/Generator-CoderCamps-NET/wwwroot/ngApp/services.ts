namespace <%= appNamespace %>.Services {

    <% if(type === "Sample Data") { %>export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('<%= appNamespace %>').service('movieService', MovieService);
    <% } %><% if(type === "Sample Data") { %>export class MyService {

    }
    angular.module('<%= appNamespace %>').service('myService', MyService);
    <% } %>}
