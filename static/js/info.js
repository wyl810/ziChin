// 网站icon
const _iconBase64 = 'base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA9CAYAAADxoArXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMzNkUwREE5MUU0MTFFQkJDMDg5RTg2RUYyRkExNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMzNkUwREI5MUU0MTFFQkJDMDg5RTg2RUYyRkExNTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzM2RTBEODkxRTQxMUVCQkMwODlFODZFRjJGQTE1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzM2RTBEOTkxRTQxMUVCQkMwODlFODZFRjJGQTE1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgN/YlQAAAr/SURBVHja5JsJdFTV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'
export const iconBase64 = `data:image/png;base64,${_iconBase64}`

export const listData = [
    {
        title: 'test www',
        list: [
            {
                name: 'mdclub论坛',
                url: 'http://mdclub.zichin.com',
                disc: 'http://mdclub.zichin.com',
                target: '_blank',
            },
            {
                name: 'mdclub论坛admin',
                url: 'http://mdclub.zichin.com/admin/',
                disc: 'http://mdclub.zichin.com/admin/',
                target: '_blank',
                br: true,
            },
            {
                name: 'discuz论坛',
                url: 'http://luntan.zichin.com',
                disc: 'http://luntan.zichin.com',
                target: '_blank',
            },
            {
                name: 'discuz论坛admin',
                url: 'http://luntan.zichin.com',
                disc: 'http://luntan.zichin.com',
                target: '_blank',
                br: true,
            },
            {
                name: 'emlog博客',
                url: 'http://blog.zichin.com',
                disc: 'http://blog.zichin.com',
                target: '_blank',
            },
            {
                name: 'emlog博客admin',
                url: 'http://blog.zichin.com/admin/',
                disc: 'http://blog.zichin.com/admin/',
                target: '_blank',
                br: true,
            },
            {
                name: 'wordpress博客',
                url: 'http://blog2.zichin.com',
                disc: 'http://blog2.zichin.com',
                target: '_blank',
            },
            {
                name: 'wordpress博客admin',
                url: 'http://blog2.zichin.com/wp-admin/',
                disc: 'http://blog2.zichin.com/wp-admin/',
                target: '_blank',
            },
        ],
    },
    {
        title: '常用网址',
        list: [
            {
                name: '查询兼容性',
                url: 'https://caniuse.com/',
                disc: 'caniuse.com',
                target: '_blank',
            },
        ],
    },
    {
        title: 'test sth.',
        list: [
            {
                name: 'marquee',
                url: './marquee-test.html',
                disc: 'marquee-test',
                target: '_self',
            },
            {
                name: 'card',
                url: './card-test.html',
                disc: 'card-test',
                target: '_self',
            },
            {
                name: 'css3 line',
                url: './css3-line-test.html',
                disc: 'css3-line-test',
                target: '_self',
            },
            {
                name: 'canvas river',
                url: './canvas-test.html',
                disc: 'canvas-test',
                target: '_self',
            },
            {
                name: 'vue3 raw',
                url: './www/vue3-raw-test/index.html',
                disc: 'vue3-test',
                target: '_self',
            },
            {
                name: 'vue3 vite',
                url: './www/vue3-vite-test/dist/index.html',
                disc: 'vue3-vite-test',
                target: '_self',
            },
        ],
    },
]

