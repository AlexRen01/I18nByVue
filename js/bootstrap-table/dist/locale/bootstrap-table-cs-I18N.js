/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
$(function () {
    $.fn.bootstrapTable.locales[i18n.locale] = {
        formatLoadingMessage: function () {
            if (i18n.locale == "zh")
                return '正在努力地加载数据中，请稍候……';
            else
                return 'Loading, please wait...';
        },
        formatRecordsPerPage: function (pageNumber) {
            if (i18n.locale == "zh")
                return '每页显示 ' + pageNumber + ' 条记录';
            else
                return pageNumber + ' rows per page';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            if (i18n.locale == "zh")
                return '显示第 ' + pageFrom + ' 到第 ' + pageTo + ' 条记录，总共 ' + totalRows + ' 条记录';
            else
                return 'Showing ' + pageFrom + ' to ' + pageTo + ' of ' + totalRows + ' rows';
        },
        formatSearch: function () {
            if (i18n.locale == "zh")
                return '搜索';
            else
                return 'Search';
        },
        formatNoMatches: function () {
            if (i18n.locale == "zh")
                return '没有找到匹配的记录';
            else
                return 'No matching records found';
        },
        formatPaginationSwitch: function () {
            if (i18n.locale == "zh")
                return '隐藏/显示分页';
            else
                return 'Hide/Show pagination';
        },
        formatRefresh: function () {
            if (i18n.locale == "zh")
                return '刷新';
            else
                return 'Refresh';
        },
        formatToggle: function () {
            if (i18n.locale == "zh")
                return '切换';
            else
                return 'Toggle';
        },
        formatColumns: function () {
            if (i18n.locale == "zh")
                return '列';
            else
                return 'Columns';
        },
        formatExport: function () {
            if (i18n.locale == "zh")
                return '导出数据';
            else
                return 'Export data';

        },
        formatClearFilters: function () {
            if (i18n.locale == "zh")
                return '清空过滤';
            else
                return 'Clear filters';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales[i18n.locale]);

});
