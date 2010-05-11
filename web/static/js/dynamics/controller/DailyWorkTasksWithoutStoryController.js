
var DailyWorkTasksWithoutStoryController = function(model, element, parentController) { 
  TasksWithoutStoryController.call(this, model, element, parentController);
  this.taskControllerDescriptionColumn = DailyWorkTasksWithoutStoryController.columnIndices.description;
};
extendObject(DailyWorkTasksWithoutStoryController, TasksWithoutStoryController);


DailyWorkTasksWithoutStoryController.columnNames =
  [ "prio", "name", "state", "context", "responsibles", "el", "oe", "es", "actions", "description", "buttons"];
DailyWorkTasksWithoutStoryController.columnIndices = CommonController.createColumnIndices(DailyWorkTasksWithoutStoryController.columnNames);


DailyWorkTasksWithoutStoryController.prototype._getTableConfig = function() {
  var config = new DynamicTableConfiguration({
    caption: "My tasks without story",
    dataType: "stories",
    captionConfig: {
      cssClasses: "dynamictable-caption-block ui-widget-header ui-corner-all"
    },
    cssClass: "dynamicTable-sortable-tasklist ui-widget-content ui-corner-all task-table tasksWithoutStory-table",
    dataType: "tasksWithoutStory",
    rowControllerFactory: TasksWithoutStoryController.prototype.taskControllerFactory,
    dataSource: DailyWorkModel.prototype.getTasksWithoutStory
  });

  config.addCaptionItem({
    name:   "createTask",
    text:   "Create task",
    cssClass:"create",
    callback: TasksWithoutStoryController.prototype.createTask
  });
  
  return config;
};

DailyWorkTasksWithoutStoryController.prototype._addColumnConfigs = function(config) {
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.prio, TasksWithoutStoryController.columnConfig.prio);
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.name, TasksWithoutStoryController.columnConfig.name);
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.state, TasksWithoutStoryController.columnConfig.state);
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.responsibles, TasksWithoutStoryController.columnConfig.responsibles);
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.el, TasksWithoutStoryController.columnConfig.effortLeft);
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.oe, TasksWithoutStoryController.columnConfig.originalEstimate);
  if (Configuration.isTimesheetsEnabled()) {
    config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.es, TasksWithoutStoryController.columnConfig.effortSpent);
  }
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.actions, TasksWithoutStoryController.columnConfig.actions);
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.description, TasksWithoutStoryController.columnConfig.description);
  config.addColumnConfiguration(DailyWorkTasksWithoutStoryController.columnIndices.buttons, TasksWithoutStoryController.columnConfig.buttons);
};




