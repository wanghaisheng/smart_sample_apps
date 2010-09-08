steal.plugins('jquery/controller','jquery/controller/subscribe',
			  'jquery/view/ejs',
			  'jquery/model/store',
			  'jquery/model',
			  'jquery/dom/fixture',    	
    'jquery/dom/form_params' 		)
    .then('//smart_med_display/scripts/class')
    .then('//smart_med_display/scripts/json2')
    .then('//smart_med_display/scripts/date')
    .then('//smart_med_display/scripts/jquery.form')
    .then('//smart_med_display/scripts/smart-api-client')
    .css('//smart_med_display/stylesheets/jquery-ui-1.8.2.custom')
    .models('//smart_med_display/models/rdf_object', 
    		'//smart_med_display/models/med', 
    		'//smart_med_display/models/med_details', 
    		'//smart_med_display/models/problem'
    		)
    .controllers('med_coder', 'wizard')
    .views();


