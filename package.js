Package.describe({
  summary: "RateIt - a modern, mobile-friendly, jQuery (star) rating plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'jsonform/lib/jsonform.js'
  ], 'client'
  );
});
