//! Builtins live here, such as Object, String, Math, etc.

pub mod array;
pub mod bigint;
pub mod boolean;
#[cfg(feature = "console")]
pub mod console;
pub mod date;
pub mod error;
pub mod function;
pub mod global_this;
pub mod infinity;
pub mod iterable;
pub mod json;
pub mod map;
pub mod math;
pub mod nan;
pub mod number;
pub mod object;
pub mod reflect;
pub mod regexp;
pub mod set;
pub mod string;
pub mod symbol;
pub mod undefined;

pub(crate) use self::{
    array::{array_iterator::ArrayIterator, Array},
    bigint::BigInt,
    boolean::Boolean,
    date::Date,
    error::{Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, UriError},
    function::BuiltInFunctionObject,
    global_this::GlobalThis,
    infinity::Infinity,
    json::Json,
    map::map_iterator::MapIterator,
    map::Map,
    math::Math,
    nan::NaN,
    number::Number,
    object::for_in_iterator::ForInIterator,
    object::Object as BuiltInObjectObject,
    reflect::Reflect,
    regexp::RegExp,
    set::set_iterator::SetIterator,
    set::Set,
    string::String,
    symbol::Symbol,
    undefined::Undefined,
};
use crate::{
    property::{Attribute, PropertyDescriptor},
    Context, JsValue,
};

/// Trait representing a global built-in object such as `Math`, `Object` or
/// `String`.
///
/// This trait must be implemented for any global built-in accessible from
/// Javascript.
pub(crate) trait BuiltIn {
    /// Binding name of the built-in inside the global object.
    ///
    /// E.g. If you want access the properties of a `Complex` built-in
    /// with the name `Cplx` you must assign `"Cplx"` to this constant,
    /// making any property inside it accessible from Javascript as `Cplx.prop`
    const NAME: &'static str;

    /// Property attribute flags of the built-in.
    /// Check [Attribute] for more information.
    const ATTRIBUTE: Attribute;

    /// Initialization code for the built-in.
    /// This is where the methods, properties, static methods and the constructor
    /// of a built-in must be initialized to be accessible from Javascript.
    fn init(context: &mut Context) -> JsValue;
}

/// Utility function that checks if a type implements `BuiltIn` before
/// initializing it as a global built-in.
#[inline]
fn init_builtin<B: BuiltIn>(context: &mut Context) {
    let value = B::init(context);
    let property = PropertyDescriptor::builder()
        .value(value)
        .writable(B::ATTRIBUTE.writable())
        .enumerable(B::ATTRIBUTE.enumerable())
        .configurable(B::ATTRIBUTE.configurable());
    context
        .global_object()
        .borrow_mut()
        .insert(B::NAME, property);
}

/// Initializes built-in objects and functions
#[inline]
pub fn init(context: &mut Context) {
    macro_rules! globals {
        ($( $builtin:ty ),*) => {
            $(init_builtin::<$builtin>(context)
            );*
        }
    }

    globals! {
        Undefined,
        Infinity,
        NaN,
        GlobalThis,
        BuiltInFunctionObject,
        BuiltInObjectObject,
        Math,
        Json,
        Array,
        BigInt,
        Boolean,
        Date,
        Map,
        Number,
        Set,
        String,
        RegExp,
        Symbol,
        Error,
        RangeError,
        ReferenceError,
        TypeError,
        SyntaxError,
        EvalError,
        UriError,
        Reflect
    };

    #[cfg(feature = "console")]
    init_builtin::<console::Console>(context);
}

pub trait JsArgs {
    /// Utility function to `get` a parameter from
    /// a `[JsValue]` or default to `JsValue::Undefined`
    /// if `get` returns `None`.
    ///
    /// Call this if you are thinking of calling something similar to
    /// `args.get(n).cloned().unwrap_or_default()` or
    /// `args.get(n).unwrap_or(&undefined)`.
    ///
    /// This returns a reference for efficiency, in case
    /// you only need to call methods of `JsValue`, so
    /// try to minimize calling `clone`.
    fn get_or_undefined(&self, index: usize) -> &JsValue;
}

impl JsArgs for [JsValue] {
    fn get_or_undefined(&self, index: usize) -> &JsValue {
        const UNDEFINED: &JsValue = &JsValue::Undefined;
        self.get(index).unwrap_or(UNDEFINED)
    }
}
