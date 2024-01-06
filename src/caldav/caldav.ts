import { CalendarClient } from "./calendar-client";
import { CalDavDescriptor } from "../config";
import { CalendarEvent } from "./calendar-event";

export async function listEvents(
  calDesc: CalDavDescriptor,
  start: Date,
  end: Date
): Promise<CalendarEvent[]> {
  const calendarClient = new CalendarClient(
    calDesc.url,
    calDesc.username,
    calDesc.password
  );
  return await calendarClient.getEvents(start, end);
}
