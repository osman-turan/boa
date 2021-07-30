(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;A&gt;","synthetic":false,"types":["arrayvec::array_string::ArrayString"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a>&lt;A as <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"arrayvec/trait.Array.html#associatedtype.Item\" title=\"type arrayvec::Array::Item\">Item</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["arrayvec::ArrayVec"]}];
implementors["boa"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"gc/struct.GcCell.html\" title=\"struct gc::GcCell\">GcCell</a>&lt;<a class=\"struct\" href=\"boa/object/struct.Object.html\" title=\"struct boa::object::Object\">Object</a>&gt;&gt; for <a class=\"struct\" href=\"boa/object/gcobject/struct.GcObject.html\" title=\"struct boa::object::gcobject::GcObject\">GcObject</a>","synthetic":false,"types":["boa::object::gcobject::GcObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"boa/struct.JsString.html\" title=\"struct boa::JsString\">JsString</a>","synthetic":false,"types":["boa::string::JsString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"enum\" href=\"boa/syntax/ast/node/enum.Node.html\" title=\"enum boa::syntax::ast::node::Node\">Node</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"boa/syntax/ast/node/array/struct.ArrayDecl.html\" title=\"struct boa::syntax::ast::node::array::ArrayDecl\">ArrayDecl</a>","synthetic":false,"types":["boa::syntax::ast::node::array::ArrayDecl"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"struct\" href=\"boa/syntax/ast/node/declaration/struct.Declaration.html\" title=\"struct boa::syntax::ast::node::declaration::Declaration\">Declaration</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"enum\" href=\"boa/syntax/ast/node/declaration/enum.DeclarationList.html\" title=\"enum boa::syntax::ast::node::declaration::DeclarationList\">DeclarationList</a>","synthetic":false,"types":["boa::syntax::ast::node::declaration::DeclarationList"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"boa/syntax/ast/node/identifier/struct.Identifier.html\" title=\"struct boa::syntax::ast::node::identifier::Identifier\">Identifier</a>","synthetic":false,"types":["boa::syntax::ast::node::identifier::Identifier"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Owned"]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["gc"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"gc/trait.Trace.html\" title=\"trait gc::Trace\">Trace</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"gc/struct.Gc.html\" title=\"struct gc::Gc\">Gc</a>&lt;T&gt;","synthetic":false,"types":["gc::Gc"]}];
implementors["git2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"git2/struct.Oid.html\" title=\"struct git2::Oid\">Oid</a>","synthetic":false,"types":["git2::oid::Oid"]}];
implementors["num_format"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"num_format/struct.Buffer.html\" title=\"struct num_format::Buffer\">Buffer</a>","synthetic":false,"types":["num_format::buffer::Buffer"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"num_format/utils/struct.DecimalStr.html\" title=\"struct num_format::utils::DecimalStr\">DecimalStr</a>&lt;'a&gt;","synthetic":false,"types":["num_format::strings::DecimalStr"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"num_format/utils/struct.InfinityStr.html\" title=\"struct num_format::utils::InfinityStr\">InfinityStr</a>&lt;'a&gt;","synthetic":false,"types":["num_format::strings::InfinityStr"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"num_format/utils/struct.MinusSignStr.html\" title=\"struct num_format::utils::MinusSignStr\">MinusSignStr</a>&lt;'a&gt;","synthetic":false,"types":["num_format::strings::MinusSignStr"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"num_format/utils/struct.NanStr.html\" title=\"struct num_format::utils::NanStr\">NanStr</a>&lt;'a&gt;","synthetic":false,"types":["num_format::strings::NanStr"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"num_format/utils/struct.PlusSignStr.html\" title=\"struct num_format::utils::PlusSignStr\">PlusSignStr</a>&lt;'a&gt;","synthetic":false,"types":["num_format::strings::PlusSignStr"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"num_format/utils/struct.SeparatorStr.html\" title=\"struct num_format::utils::SeparatorStr\">SeparatorStr</a>&lt;'a&gt;","synthetic":false,"types":["num_format::strings::SeparatorStr"]}];
implementors["regex_syntax"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"regex_syntax/hir/literal/struct.Literal.html\" title=\"struct regex_syntax::hir::literal::Literal\">Literal</a>","synthetic":false,"types":["regex_syntax::hir::literal::Literal"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt; for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt;","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>]&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]}];
implementors["url"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"url/struct.Url.html\" title=\"struct url::Url\">Url</a>","synthetic":false,"types":["url::Url"]}];
implementors["wasm_bindgen"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"wasm_bindgen/struct.JsValue.html\" title=\"struct wasm_bindgen::JsValue\">JsValue</a>&gt; for <a class=\"struct\" href=\"wasm_bindgen/closure/struct.Closure.html\" title=\"struct wasm_bindgen::closure::Closure\">Closure</a>&lt;T&gt;","synthetic":false,"types":["wasm_bindgen::closure::Closure"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"wasm_bindgen/struct.JsValue.html\" title=\"struct wasm_bindgen::JsValue\">JsValue</a>&gt; for <a class=\"struct\" href=\"wasm_bindgen/struct.JsValue.html\" title=\"struct wasm_bindgen::JsValue\">JsValue</a>","synthetic":false,"types":["wasm_bindgen::JsValue"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()