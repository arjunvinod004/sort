$(function() {
    $(".task-list").sortable({
      connectWith: ".task-list",
      placeholder: "task-placeholder",
      start: function(event, ui) {
        // Get the task ID
        var taskId = ui.item.attr('id');
        //alert(taskId);
        console.log("Task ID: " + taskId);
      },
      stop: function(event, ui) {
        // Get the destination column ID
        var destinationColumnId = ui.item.closest('.column').attr('id');
        // alert(destinationColumnId);
        console.log("Destination Column ID: " + destinationColumnId);
      }
    }).disableSelection();
  });