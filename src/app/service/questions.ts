import { Validators } from '@angular/forms';
import { OptionItemType, QuestionSessionType } from './type';

const setRadioOptions = (arr: string[]): OptionItemType[] => {
  return arr.map((item, index): OptionItemType => {
    return { key: (index + 1).toString(), value: item };
  });
};

const techQuestionOptions = setRadioOptions([
  '本领域所需要的基础知识较生疏，处于陌生的状态。',
  '具备本领域的基础知识，但对本领域知识理解有限，处于学习阶段。',
  '对本领域的知识和概念有一定了解。能够对相关知识加以利用。',
  '进行局部的知识整合，串联相关专业知识，形成较为系统的专业知识背景。',
  '专业技能，知识和行业的理解融汇贯通，在工作环境下是公认的高手。'
]);

const yesNo = ['Yes', 'No'];

export const introduction: QuestionSessionType = {
  items: [
    {
      isNoLabel: true,
      code: 'introduction',
      placeholder: 'Introduce yourself in english',
      type: 'textarea',
      valid: [Validators.min(100)]
    }
  ]
};
export const job: QuestionSessionType = {
  label: 'Job information',
  items: [
    {
      code: 'jobPosition',
      type: 'radio',
      data: ['IOS', 'Android', 'Web', 'Server', 'Product Manager']
    },
    {
      code: 'arrivalDate',
      type: 'date',
      inputType: 'date',
      help: 'What date do you expect your fastest arrival date?',
      value: new Date()
    },
    {
      code: 'expectedSalary',
      type: 'text',
      help: 'What is your reasonable expectation of your salary in this employment?'
    }
  ]
};

export const personal: QuestionSessionType = {
  label: 'Personal Information',
  items: [
    {
      code: 'chineseName',
      type: 'text',
      valid: [Validators.min(100)]
    },
    {
      code: 'education',
      type: 'radio',
      data: ['College degree', 'Bachelor degree', 'Master degree']
    },
    {
      code: 'identificationNumber',
      type: 'text',
      inputType: 'number'
    },
    {
      code: 'maritalStatus',
      type: 'radio',
      data: ['Married', 'Unmarried', 'Divorce', 'Separated']
    },
    {
      code: 'age',
      type: 'text',
      inputType: 'number'
    },
    {
      code: 'sex',
      type: 'radio',
      data: ['Male', 'Female']
    }
  ]
};

export const education: QuestionSessionType = {
  label: 'Education',
  items: [
    {
      code: 'highSchool',
      label: 'High-School',
      type: 'text'
    },
    {
      code: 'university',
      type: 'text',
      help: 'Which university did you go to'
    },
    {
      code: 'master',
      optional: true,
      type: 'text',
      help: 'If you have not read a master\'s degree, you don\'t need to fill in this field'
    }
  ]
};
export const patterns: QuestionSessionType = {
  label: 'Design Patterns',
  items: [
    {
      code: 'p1',
      label: '你对设计模式中的【单例模式】的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      checkValue: 2,
      subItems: [
        {
          code: 'q1',
          label: '能否说出【懒汉单例】与【饿汉单例】的区别？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'q2',
          label: '你在工作中是否有刻意的使用【单例模式】解决过具体问题？',
          type: 'radio',
          data: yesNo
        }
      ]
    },
    {
      code: 'p2',
      label: '你对设计模式中的【工场模式】的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      checkValue: 2,
      subItems: [
        {
          code: 'q1',
          label: '能否说出【工厂模式】与【抽象工厂模式】的区别？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'q2',
          label: '你在工作中是否有刻意的使用【抽象工厂模式】解决过具体问题？',
          type: 'radio',
          data: yesNo
        }
      ]
    },
    {
      code: 'p3',
      label: '你对设计模式中的【装饰器模式】的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions
    },
    {
      code: 'p4',
      label: '你对设计模式中的【模板方法】的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions
    },
    {
      code: 'p5',
      label:
        '你是否能够在不借助任何框架的前提下仅通过基础语法实现一个简单的 【观察者模式】 的设计？',
      type: 'radio',
      data: yesNo
    },
    {
      code: 'p6',
      label: '你是否能够在不借助任何框架的前提下仅通过基础语法实现一个简单的 MVVM 的设计？',
      type: 'radio',
      data: yesNo
    }
  ]
};

export const performance: QuestionSessionType = {
  label: 'Performance',
  items: [
    {
      code: 'performance1',
      label: '你是否了解堆内存和栈内存之间的区别？',
      type: 'radio',
      data: techQuestionOptions
    },
    {
      code: 'performance2',
      label: '你对递归的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      checkValue: 2,
      subItems: [
        {
          code: 'q1',
          label: '是否了解递归与尾递归的区别？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'q2',
          label: '你在工作中是否用递归或尾递归解决过具体问题？',
          type: 'radio',
          data: yesNo
        }
      ]
    }
  ]
};

export const git: QuestionSessionType = {
  label: 'GIT',
  items: [
    {
      code: 'git1',
      label: '你对 Git 使用的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      checkValue: 2,
      subItems: [
        {
          code: 'df1',
          label: '在工作中是否使用过 git stash 命令解决具体问题？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df2',
          label: '在工作中是否使用过 git reset 命令解决具体问题？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df3',
          label: '在工作中是否使用过 git rebase 命令解决具体问题？',
          type: 'radio',
          data: yesNo
        }
      ]
    },
    {
      code: 'git2',
      label: '是否在项目中使用过 husky / line-staged 或类似的工具 来进行 pre-commit检查？',
      type: 'radio',
      data: techQuestionOptions
    }
  ]
};

export const web: QuestionSessionType = {
  label: 'WEB',
  items: [
    {
      code: 'web',
      label: '你对 Javascript 的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      checkValue: 2,
      subItems: [
        {
          code: 'df1',
          label: '你对 Typescript 的了解程度如何',
          type: 'radio',
          data: techQuestionOptions
        },
        {
          code: 'df2',
          label: '是否了解 Angular 技术？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df3',
          label: '是否了解 Vue / React 技术？',
          type: 'radio',
          data: yesNo
        }
      ]
    },
    {
      code: 'web2',
      label: '你对加密技术的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      checkValue: 2,
      subItems: [
        {
          code: 'df1',
          label: '你知道对称加密和非对称加密分别是什么？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df2',
          label: '在你过往的工作经验中，有利用相关的加密技术解决过具体的业务问题么？',
          type: 'radio',
          data: yesNo
        }
      ]
    }
  ]
};
export const teamwork = {
  label: 'Teamwork',
  items: [
    {
      code: 't1',
      label: '你对 Scrum 了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      subItems: [
        {
          code: 'df1',
          label: '你在过去的团队协作中是否采用过 Scrum 工作方法？',
          type: 'radio',
          data: techQuestionOptions
        },
        {
          code: 'df2',
          label: '你清楚的知道 Scrum 中 master 的工作职责么？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df3',
          label: '你了解 Scrum 中 不同 任务的 Size 的定义么？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df3',
          label: '你了解 Scrum 中 对任务打分的规则么？',
          type: 'radio',
          data: yesNo
        }
      ]
    },
    {
      code: 't2',
      label: '你是否用过 Google Docs 套件来进行项目协作管理？',
      type: 'radio',
      data: yesNo
    }
  ]
};
export const architecture: QuestionSessionType = {
  label: 'Architecture',
  items: [
    {
      code: 'architecture',
      label: '你对泛型使用的理解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      subItems: [
        {
          code: 'q1',
          label: '是否在工作中利用泛型解决过具体问题？',
          type: 'radio',
          data: yesNo
        }
      ]
    },
    {
      code: 'architecture2',
      label: '你对模块化拆分的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      subItems: [
        {
          code: 'q1',
          label: '是否在工作中使用过模块化拆分的设计？',
          type: 'radio',
          data: yesNo
        }
      ]
    }
  ]
};
export const logic: QuestionSessionType = {
  label: 'Logic',
  items: [
    {
      code: 'logic',
      label: '(1), (1 1),(2 1), (1 2 1 1), (1 1 1 2 2 1), ？ 下一个是什么你能推算出来么？',
      type: 'radio',
      data: yesNo
    }
  ]
};
export const product: QuestionSessionType = {
  label: 'Product',
  items: [
    {
      code: 'product',
      label: '你对设计模式中的【单例模式】的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      subItems: [
        {
          code: 'df1',
          label: '能否说出【懒汉单例】与【饿汉单例】的区别？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df2',
          label: '你在工作中是否有刻意的使用【单例模式】解决过具体问题？',
          type: 'radio',
          data: yesNo
        }
      ]
    }
  ]
};
export const android: QuestionSessionType = {
  label: 'Android',
  items: [
    {
      code: 'android',
      label: '你对设计模式中的【单例模式】的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      subItems: [
        {
          code: 'df1',
          label: '能否说出【懒汉单例】与【饿汉单例】的区别？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df2',
          label: '你在工作中是否有刻意的使用【单例模式】解决过具体问题？',
          type: 'radio',
          data: yesNo
        }
      ]
    }
  ]
};
export const ios: QuestionSessionType = {
  label: 'IOS',
  items: [
    {
      code: 'ios',
      label: '你对设计模式中的【单例模式】的了解程度如何？',
      type: 'radio',
      data: techQuestionOptions,
      subItems: [
        {
          code: 'df1',
          label: '能否说出【懒汉单例】与【饿汉单例】的区别？',
          type: 'radio',
          data: yesNo
        },
        {
          code: 'df2',
          label: '你在工作中是否有刻意的使用【单例模式】解决过具体问题？',
          type: 'radio',
          data: yesNo
        }
      ]
    }
  ]
};
