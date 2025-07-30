(function ($, Drupal) {

  Drupal.behaviors.pdf_new_tab = {
    attach: function (context, settings) {
      // Open PDF files in a new window.
      $('a[target!="_blank"][href$=".pdf"]', context).attr('target', '_blank');
    }
  };

}(jQuery, Drupal));
