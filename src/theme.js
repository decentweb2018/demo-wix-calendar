export const THEME = {
    MAIN_COLOR: '#16A34A',
    SECONDARY_COLOR: '#DCFCE7',
    TEXT_MAIN_COLOR: '#52525B',

    DANGER_COLOR: '#EF4444',
    DANGER_BG_COLOR: '#FEF2F2',
    WARNING_COLOR: '#F97316',
    WARNING_COLOR_2: '#EA580C',
    WARNING_BG_COLOR: '#FFF7ED',
    WARNING_BG_COLOR_2: '#FED7AA',

    INPUT_MAIN_COLOR: '#FCFCFC',
    BORDER_MAIN_COLOR: '#E4E4E7',
    PLACEHOLDER_COLOR: '#A1A1AA',

    GREY_COLOR: '#F4F4F5',
    GREY_COLOR_2: '#FAFAFA',
    GREY_COLOR_3: '#71717A',
    GREY_COLOR_4: '#D4D4D8',

    PRIMARY_COLOR: '#EFF6FF',
    PRIMARY_COLOR_2: '#60A5FA',

    PINK_COLOR: '#FFF1F2',
    PINK_COLOR_2: '#FDA4AF',

    INDIGO_COLOR: '#6366F1',
    YELLOW_COLOR: '#FBBF24',
    GREEN_COLOR: '#4ADE80',
    INFO_COLOR: '#2DD4BF'
}

export const CalendarStyles = {
    arrowColor: THEME.MAIN_COLOR,
    monthTextColor: '#27272A',
    dayTextColor: '#65656b',
    todayTextColor: "#000",
}

export const JobStyles = {
    container: {
        paddingHorizontal: 15,
        height: '100%',
        backgroundColor: '#fff',
    },
    section: {
        marginBottom: 25,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    subRow: {
        width: 140,
    },
    title: {
        marginBottom: 5,
        fontSize: 28,
    },
    subTitle: {
        marginBottom: 4,
        fontSize: 15,
        color: "#71717A"
    },
    dt: {
        marginRight: 4,
        fontSize: 15,
        color: THEME.GREY_COLOR_3
    },
    dd: {
        fontSize: 15,
    },
    box: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: THEME.GREY_COLOR,
        backgroundColor: THEME.GREY_COLOR_2
    },
    boxTitle: {
        marginBottom: 3,
        fontSize: 17,
    },
    boxDesc: {
        lineHeight: 21,
        color: THEME.GREY_COLOR_3
    },
    badge: {
        marginRight: 8,
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "#4ADE80",
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#3F3F46"
    }
}