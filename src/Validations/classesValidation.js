import * as yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0)

const classesValidation = yup.object({
  classTitle: yup
    .string()
    .matches(/^[a-zA-Z0-9~!@#$%^&*()_+-=:<>,./|\s]{4,30}$/, {
      message:
        "Class title should have between 4-30 char, and contain only alphabets, numbers and special characters.",
      excludeEmptyString: true,
    })
    .required("Class title is required."),
  classType: yup
    .string()
    .matches(/(In-Person|Remote)/, {
      message: "An appropriate class type is required.",
      excludeEmptyString: true,
    })
    .required("Please indicate the mode that the classes are held in."),
  classLevel: yup
    .string()
    .matches(
      /(Primary 1|Primary 2|Primary 3|Primary 4|Primary 5|Primary 6|Secondary 1|Secondary 2|Secondary 3|Secondary 4|Secondary 5)/,
      {
        message: "Please select a valid class level.",
        excludeEmptyString: true,
      }
    )
    .required("At least one class level is required."),
  subject: yup
    .string()
    .required("Exactly one subject is required.")
    .matches(
      /(English|Mathematics|Science|Additional Mathematics|Elementary Mathematics|Biology|Physics|Chemistry)/,
      {
        message: "Please select one subject.",
        excludeEmptyString: true,
      }
    ),
  timeDay: yup
    .date()
    .min(today, 'Date cannot be in the past.')
    .required("Date and time is required."),
    // .default(() => new Date()),//! How to make the date not before today
  // tutor: yup.string().required("A tutor is required."),
  // bookedBy: yup.array().of(yup.string()),
  // date: yup.date().min(today, 'Date cannot be in the past.').required('Date is required.'),
  // time: yup.string().required('Time is required.'),
  groupSize: yup
    .number()
    .typeError("Group size must be a number.")
    .positive()
    .integer()
    .required("Group size is required.")
    .min(1, "Group size must be at least 1."),
});

export default classesValidation;
