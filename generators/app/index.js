'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var _s = require('underscore.string');
var inquirer = require('inquirer');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Angular') + ' generator!'
    ));
    var prompts = [{
      name: 'appName',
      message: 'What is the name of your application?',
      required: true,
      default: 'Generator-CoderCamps-NET'
    }, {
      name: 'type',
      message: 'Which type of project would you like to create?',
      type: 'list',
      choices: ['Empty', 'Sample Data', {
        name: 'Security - Disabled Currently',
        disabled: true
      }]
    }];

    inquirer.prompt(prompts, function(props) {
      this.appName = props.appName.replace(/\s\s/g, '-')
      this.appNamespace = this.appName.replace(/-/g, '_');
      // this.appName = _s.slugify(props.appName) || 'coder-camps-js';
      // this.appDesc = props.appDesc || 'A MEAN stack application.';
      this.type = props.type;
      done();
    }.bind(this));
  },
  projectfiles: function() {
    // this.template('package.json', 'package.json');
    // this.template('bower.json', 'bower.json');
    // this.template('./views/index.html', './views/index.html');
    // this.template('typings.json', 'typings.json');

    let files = [
      './global.json'
    ];

    let genFiles = [
      '/.bowerrc',
      '/appsettings.json',
      '/bower.json',
      '/gulpfile.js',
      '/package.json',
      '/Project_Readme.html',
      '/project.json',
      '/Startup.cs',
      '/tsconfig.json',
      '/typings.json',

      '/Controllers/HomeController.cs',
      // Migrations
      '/Migrations/00000000000000_CreateIdentitySchema.cs',
      '/Migrations/00000000000000_CreateIdentitySchema.Designer.cs',
      '/Migrations/ApplicationDbContextModelSnapshot.cs',
      // Models
      '/Models/ApplicationDbContext.cs',
      '/Models/ApplicationUser.cs',
      // Properties
      '/Properties/launchSettings.json',
      // Services
      '/Services/IEmailSender.cs',
      '/Services/ISmsSender.cs',
      '/Services/MessageServices.cs',
      // View Models -- Account
      '/ViewModels/Account/ExternalLoginConfirmationViewModel.cs',
      '/ViewModels/Account/ForgotPasswordViewModel.cs',
      '/ViewModels/Account/LoginViewModel.cs',
      '/ViewModels/Account/RegisterViewModel.cs',
      '/ViewModels/Account/ResetPasswordViewModel.cs',
      '/ViewModels/Account/SendCodeViewModel.cs',
      '/ViewModels/Account/VerifyCodeViewModel.cs',
      // View Models -- Manage
      '/ViewModels/Manage/AddPhoneNumberViewModel.cs',
      '/ViewModels/Manage/ChangePasswordViewModel.cs',
      '/ViewModels/Manage/ConfigureTwoFactorViewModel.cs',
      '/ViewModels/Manage/FactorViewModel.cs',
      '/ViewModels/Manage/IndexViewModel.cs',
      '/ViewModels/Manage/ManageLoginsViewModel.cs',
      '/ViewModels/Manage/RemoveLoginViewModel.cs',
      '/ViewModels/Manage/SetPasswordViewModel.cs',
      '/ViewModels/Manage/VerifyPhoneNumberViewModel.cs',
      // Views
      '/Views/Home/Index.cshtml',
      // wwwroot
      '/wwwroot/_references.js',
      '/wwwroot/favicon.ico',
      '/wwwroot/web.config',
      // wwwroot -- css
      '/wwwroot/css/site.css',
      '/wwwroot/css/site.min.css',
      // wwwroot -- images
      '/wwwroot/images/ASP-NET-Banners-01.png',
      '/wwwroot/images/ASP-NET-Banners-02.png',
      '/wwwroot/images/Banner-01-Azure.png',
      '/wwwroot/images/Banner-02-VS.png',
      // wwwroot -- js
      '/wwwroot/js/site.js',
      '/wwwroot/js/site.min.js',
      // wwwroot -- ngApp
      '/wwwroot/ngApp/about.html',
      '/wwwroot/ngApp/home.html',
      '/wwwroot/ngApp/notFound.html'
    ];

    for (let file of files) {
      this.template(file, file);
    }
    var new_root = './' + this.appName + '/src/' + this.appName;
    var appName = this.appName;
    for (let file of genFiles) {
      this.template('./src/Generator-CoderCamps-NET' + file, new_root + file);
    }
    this.template('./Generator-CoderCamps-NET.sln', './' + appName + '/' + appName + '.sln');
    this.template('./src/Generator-CoderCamps-NET/Generator-CoderCamps-NET.xproj', new_root + '/' + appName + '.xproj');
    this.template('./src/Generator-CoderCamps-NET/Generator-CoderCamps-NET.xproj.user', new_root + '/' + appName + '.xproj.user');

    this.template('./src/Generator-CoderCamps-NET/wwwroot/ngApp/app.ts', new_root + '/wwwroot/ngApp/app.ts');
    this.template('./src/Generator-CoderCamps-NET/wwwroot/ngApp/controllers.ts', new_root + '/wwwroot/ngApp/controllers.ts');
    this.template('./src/Generator-CoderCamps-NET/wwwroot/ngApp/services.ts', new_root + '/wwwroot/ngApp/services.ts');

  },
  sample_data: function() {
    if(this.type === 'Sample Data') {
      var files = [
        '/API/CarsController.cs',
        '/API/DeepThought.cs',
        '/API/GenresController.cs',
        '/API/GuestbookController.cs',
        '/API/MakesController.cs',
        '/API/MoviesController.cs',

        '/Models/Answer.cs',
        '/Models/Car.cs',
        '/Models/CarMake.cs',
        '/Models/Genre.cs',
        '/Models/GuestbookEntry.cs',
        '/Models/Movie.cs',

        '/Services/CarService.cs',
        '/Services/GenreService.cs',
        '/Services/GuestbookService.cs',
        '/Services/ICarService.cs',
        '/Services/IGenreService.cs',
        '/Services/IGuestbookService.cs',
        '/Services/IMovieService.cs',
        '/Services/MovieService.cs'
      ];
      var new_root = './' + this.appName + '/src/' + this.appName;
      for(let file of files) {
        this.template('./src/Generator-CoderCamps-NET' + file, new_root + file);
      }
    }
  },
  install: function() {
    var appName = this.appName
    process.chdir(process.cwd() + '/' + appName + '/src/' + appName);
    // this.installDependencies();
    this.spawnCommandSync('typings', ['install']);
  }
});
