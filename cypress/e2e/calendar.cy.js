/// <reference types="cypress" />

import { CalendarConstants } from '../support/constants/calendarConstants';
import CalendarHelpers from '../support/helpers/calendarHelpers';

describe('Calendar E2E Tests', () => {
    beforeEach(() => {
        cy.visit(CalendarConstants.url);
    });

    it('should switch to infinite scroll and month view', () => {
        CalendarHelpers.switchToInfiniteScroll();
        CalendarHelpers.switchToMonthView();
    });

    it('should create several new events and verify their creation', () => {
        CalendarHelpers.switchToInfiniteScroll();
        CalendarHelpers.switchToMonthView();
        CalendarHelpers.clickOnEventLine(5);
        CalendarHelpers.clickOnEventLine(6);
        CalendarHelpers.clickOnEventLine(7);
        CalendarHelpers.assertConfirmationCalled();
    });

    it('should verify events do not exist in the next month', () => {
        CalendarHelpers.switchToInfiniteScroll();
        CalendarHelpers.switchToMonthView();
        CalendarHelpers.clickOnEventLine(6);
        CalendarHelpers.goToNextMonth();
        CalendarHelpers.verifyEventDoesNotExist();
    });

    it('should verify events exist after navigating back to the original date', () => {
        CalendarHelpers.switchToInfiniteScroll();
        CalendarHelpers.switchToMonthView();
        CalendarHelpers.clickOnEventLine(6);
        CalendarHelpers.goToNextMonth();
        CalendarHelpers.goToPreviousMonth();
        CalendarHelpers.verifyEventExists();
    });

    it('should verify event create in the same day', () => {
      CalendarHelpers.switchToInfiniteScroll();
      CalendarHelpers.switchToMonthView();
      CalendarHelpers.clickOnEventLine(6);
      CalendarHelpers.clickOnEventLine(6);
      CalendarHelpers.clickOnEventLine(6);
  });
});
