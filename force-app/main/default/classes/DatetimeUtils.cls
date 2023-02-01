public with sharing class DatetimeUtils {
    public class DatetimeUtilsException extends Exception {
    }

    public static final Integer DAYS_IN_WEEK = 7;
    public static final Map<String, String> DAY_SHORT_NAMES = new Map<String, String>{
        'SUNDAY' => 'SU',
        'MONDAY' => 'M',
        'TUESDAY' => 'T',
        'WEDNESDAY' => 'W',
        'THURSDAY' => 'TH',
        'FRIDAY' => 'F',
        'SATURDAY' => 'S'
    };
    public static final Map<String, Integer> DAY_INDEX_BY_SHOT_NAME = new Map<String, Integer>{
        'SU' => 0,
        'M' => 1,
        'T' => 2,
        'W' => 3,
        'TH' => 4,
        'F' => 5,
        'S' => 6
    };
    public static final Map<String, Integer> DAY_INDEX_BY_NAME = new Map<String, Integer>{
        'SUNDAY' => 0,
        'MONDAY' => 1,
        'TUESDAY' => 2,
        'WEDNESDAY' => 3,
        'THURSDAY' => 4,
        'FRIDAY' => 5,
        'SATURDAY' => 6
    };
    public static final Map<Integer, String> DAY_NAME_BY_INDEX = new Map<Integer, String>{
        0 => 'SUNDAY',
        1 => 'MONDAY',
        2 => 'TUESDAY',
        3 => 'WEDNESDAY',
        4 => 'THURSDAY',
        5 => 'FRIDAY',
        6 => 'SATURDAY'
    };
    public static final Integer MINUTES_IN_HOUR = 60;
    public static final Integer HOURS_IN_DAY = 24;
    public static final Integer MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;
    public static final Integer DEFAULT_SLOT_DURATION_IN_MINUTES = 5;
    public static final Integer FIVE_MINUTES_SLOTS_IN_HOUR = Math.round(
        MINUTES_IN_HOUR / DEFAULT_SLOT_DURATION_IN_MINUTES
    );
    public static final Integer FIVE_MINUTES_SLOTS_IN_DAY = HOURS_IN_DAY * FIVE_MINUTES_SLOTS_IN_HOUR;
    public static final Integer SECONDS_IN_MINUTE = 60;
    public static final Integer MILLISECONDS_IN_SECOND = 1000;
    public static final String ISO_DATE_FORMAT = 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'';
    public static final String ISO_TIME_FORMAT = 'HH:mm:ss.SSS';
    public static final String V_CALENDAR_DATE_FORMAT = 'yyyyMMdd\'T\'HHmmss\'Z\'';
    public static final String TIME_WITH_MERIDIAN_FORMAT = 'h:mm a';
    public static final String TIME_WITHOUT_MERIDIAN_FORMAT = 'hh:mm a';
    public static final String TIME_WITH_MERIDIAN_REGEX = '(\\d{1,2}):(\\d{1,2}) ([PA]M)';
    public static final String MERIDIAN_PM = 'PM';

    /**
     * converts date to string without locale change
     * @param  day {Date}
     * @return       return date as string
     */
    public static String convertDateToString(Date day) {
        return String.valueOf(day);
    }

    public static String convertDayIndexToDayOfWeek(Integer index) {
        if (index == null)
            return null;

        return DAY_NAME_BY_INDEX.get(index);
    }
    public static Integer convertDayOfWeekToDayIndex(String dayOfWeek) {
        if (dayOfWeek == null)
            return null;

        return DAY_INDEX_BY_NAME.get(dayOfWeek.toUpperCase());
    }
}
