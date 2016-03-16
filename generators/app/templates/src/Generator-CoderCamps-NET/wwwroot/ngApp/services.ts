namespace <%= appNamespace %>.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }


    angular.module('<%= appNamespace %>').service('movieService', MovieService);

}
