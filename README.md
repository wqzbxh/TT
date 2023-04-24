
Class extends value undefined is not a constructor or null
TypeError: Class extends value undefined is not a constructor or null……


这个错误通常是由于你的代码中存在类继承的问题导致的。当你定义一个继承自父类的子类时，如果父类未定义或者未导出，那么子类将无法识别父类并引发这个错误。

以下是一些可能的解决方案：

确保你的父类已经正确定义或者导出。

检查你的类继承语法是否正确。例如，使用extends关键字时是否正确拼写了父类的名称。

确认你的代码中是否存在变量名与类名重复的情况，这可能导致类被覆盖而无法识别。

检查你的代码是否在类定义之前使用了该类，这也可能导致类无法识别。

确认你的代码是否在运行时使用了不支持的ECMAScript版本。如果是，请考虑使用polyfill或升级你的JavaScript运行环境。

希望以上解决方案能够帮到你解决这个问题。


