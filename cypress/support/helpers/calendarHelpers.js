import { CalendarConstants } from '../constants/calendarConstants';

class CalendarHelpers {
    static switchToInfiniteScroll() {
        cy.get(CalendarConstants.selectors.infiniteScrollSwitch).click();
    }

    static switchToMonthView() {
        cy.get(CalendarConstants.selectors.monthViewSwitch).first().click();
    }

    static verifyEventExists() {
        cy.wait(2000);
        cy.get(CalendarConstants.selectors.eventItem).contains('New event you just created').should('exist');
    }

    static verifyEventDoesNotExist() {
        cy.wait(2000);
        cy.get(CalendarConstants.selectors.eventItem).contains('New event you just created').should('not.exist');
    }

    static goToNextMonth() {
        cy.get(CalendarConstants.selectors.nextMonthButton).click();
    }

    static goToPreviousMonth() {
        cy.get(CalendarConstants.selectors.previousMonthButton).click();
    }

    static clickOnEventLine(lineNumber) {
        cy.get('.event-container').eq(lineNumber - 1).click({ force: true });
        cy.window().then(win => {
            if (!win.confirm.isSinonProxy) {
                cy.stub(win, 'confirm').as('confirmStub').returns(true);
            }
        });
    }

    static assertConfirmationCalled() {
        cy.get('@confirmStub').should('be.called');
    }
}

export default CalendarHelpers;
