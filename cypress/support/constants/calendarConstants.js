export const CalendarConstants = {
    url: 'https://stephenchou1017.github.io/scheduler',
    selectors: {
        infiniteScrollSwitch: 'a[href="#/infinitescroll"] span',
        monthViewSwitch: '.ant-radio-button-wrapper:contains("Month")',
        eventTitleInput: '.timeline-event input[type="text"]',
        nextMonthButton: 'i[aria-label="icon: right"].icon-nav',
        previousMonthButton: 'i[aria-label="icon: left"].icon-nav',
        eventItem: '.scheduler-content-table',
        eventTitle: 'New event you just created',
    },
};
