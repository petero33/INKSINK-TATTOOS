export const timeSlotOptions = [
  { value: '08:00', label: '08:00 AM' },
  { value: '09:00', label: '09:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '15:00', label: '03:00 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '17:00', label: '05:00 PM' },
  { value: '18:00', label: '06:00 PM' },
  { value: '19:00', label: '07:00 PM' },
];

export function getScheduleKey(date, time) {
  if (!date || !time) return '';
  return `${date}__${time}`;
}

function isBlockingRequest(request) {
  return Boolean(
    request?.preferredDate &&
      request?.preferredTime &&
      !['declined', 'cancelled'].includes(request.status)
  );
}

export function getBlockedScheduleEntries(state) {
  const appointmentEntries = (state?.appointments || [])
    .filter((appointment) => appointment?.date && appointment?.time && appointment.status !== 'cancelled')
    .map((appointment) => ({
      id: appointment.id,
      date: appointment.date,
      time: appointment.time,
      source: 'appointment',
    }));

  const requestEntries = [
    ...(state?.requests || []),
    ...(state?.bookings || []),
  ]
    .filter(isBlockingRequest)
    .map((request) => ({
      id: request.id,
      date: request.preferredDate,
      time: request.preferredTime,
      source: 'request',
    }));

  return [...appointmentEntries, ...requestEntries];
}

export function getBookedTimesForDate(state, date) {
  return new Set(
    getBlockedScheduleEntries(state)
      .filter((entry) => entry.date === date)
      .map((entry) => entry.time)
  );
}

export function isSlotAvailable(state, date, time) {
  if (!date || !time) return false;
  return !getBookedTimesForDate(state, date).has(time);
}

export function getDateBookingSummary(state, date) {
  const bookedTimes = getBookedTimesForDate(state, date);
  return {
    bookedCount: bookedTimes.size,
    totalSlots: timeSlotOptions.length,
    fullyBooked: bookedTimes.size >= timeSlotOptions.length,
    bookedTimes,
  };
}
