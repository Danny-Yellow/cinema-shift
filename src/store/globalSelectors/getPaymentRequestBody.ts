import type { IPaymentRequest } from '@src/types/api/payment/payment';
import { createSelector } from 'reselect';
import type { RootState } from '../store';

const selectDebitCard = (state: RootState) => state.debitCard;
const selectPersonalDataForm = (state: RootState) => state.personalDataForm;
const selectScheduleSelection = (state: RootState) => state.scheduleSelection;

export const getPaymentRequest = createSelector(
  [selectDebitCard, selectPersonalDataForm, selectScheduleSelection],
  (debitCard, personalDataForm, scheduleSelection): IPaymentRequest => {
    const tickets = scheduleSelection.selectedSeats.map((ticket) => ({
      column: ticket.column,
      row: ticket.row,
    }));

    return {
      debitcard: {
        cvv: debitCard.cvv,
        expireDate: debitCard.expireDate,
        pan: debitCard.pan,
      },
      filmId: scheduleSelection.filmId,
      person: {
        firstname: personalDataForm.field.firstname.value,
        lastname: personalDataForm.field.lastname.value,
        middlename: personalDataForm.field.middlename.value,
        phone: personalDataForm.field.phone.value,
      },
      seance: {
        date: scheduleSelection.selectedSchedule.date,
        time: scheduleSelection.selectedSchedule.seance?.time ?? '',
      },
      tickets,
    };
  }
);