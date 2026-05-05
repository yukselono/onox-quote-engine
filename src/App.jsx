// SADECE DEĞİŞEN KISIMLAR DEĞİL → FULL DOSYA

import React, { useReducer, useEffect, useMemo, memo } from 'react';
import { Plus, Trash2, FileUp, Download, Image as ImageIcon, Calculator } from 'lucide-react';

/* --- CONFIG --- */
const TAX_RATE = 0.20;

/* --- REDUCER & STATE (AYNI) --- */
const initialState = {
  form: {
    heroTitle: 'The X\nin your',
    heroHighlight: 'air.',
    companyName: '',
    contactPerson: '',
    email: '',
    currency: 'USD',
    paymentTerm: '50_50',
    deliveryShort: '10-14 iş günü',
    warrantyShort: '24 Ay'
  },
  items: [
    { id: 1, name: 'PX Carbostar', qty: 1, price: 150 },
  ],
  specs: [],
  logoUrl: null,
  status: 'idle',
  result: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return { ...state, form: { ...state.form, [action.field]: action.value } };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, { id: Date.now(), name: '', qty: 1, price: 0 }] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.id ? { ...i, [action.field]: action.value } : i
        )
      };
    case 'ADD_SPEC':
      return { ...state, specs: [...state.specs, { id: Date.now(), k: '', v: '' }] };
    case 'UPDATE_SPEC':
      return {
        ...state,
        specs: state.specs.map(s =>
          s.id === action.id ? { ...s, [action.field]: action.value } : s
        )
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { form, items, specs } = state;

  const subtotal = useMemo(
    () => items.reduce((a, i) => a + i.qty * i.price, 0),
    [items]
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* 1. HERO */}
      <textarea
        id="heroTitle"
        name="heroTitle"
        autoComplete="off"
        value={form.heroTitle}
        onChange={(e) => dispatch({ type: 'UPDATE_FORM', field: 'heroTitle', value: e.target.value })}
        placeholder="Hero başlık"
      />

      <input
        id="heroHighlight"
        name="heroHighlight"
        autoComplete="off"
        value={form.heroHighlight}
        onChange={(e) => dispatch({ type: 'UPDATE_FORM', field: 'heroHighlight', value: e.target.value })}
        placeholder="Highlight"
      />

      {/* 2. CUSTOMER */}
      <input
        id="companyName"
        name="companyName"
        autoComplete="organization"
        value={form.companyName}
        onChange={(e) => dispatch({ type: 'UPDATE_FORM', field: 'companyName', value: e.target.value })}
        placeholder="Firma"
      />

      <input
        id="contactPerson"
        name="contactPerson"
        autoComplete="name"
        value={form.contactPerson}
        onChange={(e) => dispatch({ type: 'UPDATE_FORM', field: 'contactPerson', value: e.target.value })}
        placeholder="Yetkili"
      />

      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value={form.email}
        onChange={(e) => dispatch({ type: 'UPDATE_FORM', field: 'email', value: e.target.value })}
        placeholder="Email"
      />

      {/* 3. ITEMS */}
      <h3>Kalemler</h3>
      {items.map(item => (
        <div key={item.id} className="flex gap-2">

          <input
            name={`item-name-${item.id}`}
            value={item.name}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_ITEM', id: item.id, field: 'name', value: e.target.value })
            }
            placeholder="Kalem"
          />

          <input
            name={`item-qty-${item.id}`}
            type="number"
            value={item.qty}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_ITEM', id: item.id, field: 'qty', value: Number(e.target.value) })
            }
          />

          <input
            name={`item-price-${item.id}`}
            type="number"
            value={item.price}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_ITEM', id: item.id, field: 'price', value: Number(e.target.value) })
            }
          />

          <button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>
            <Trash2 size={14} />
          </button>
        </div>
      ))}

      <button onClick={() => dispatch({ type: 'ADD_ITEM' })}>
        <Plus /> Ekle
      </button>

      {/* 4. SPECS */}
      <h3>Specs</h3>
      {specs.map(spec => (
        <div key={spec.id} className="flex gap-2">

          <input
            name={`spec-key-${spec.id}`}
            value={spec.k}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_SPEC', id: spec.id, field: 'k', value: e.target.value })
            }
            placeholder="Key"
          />

          <input
            name={`spec-value-${spec.id}`}
            value={spec.v}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_SPEC', id: spec.id, field: 'v', value: e.target.value })
            }
            placeholder="Value"
          />
        </div>
      ))}

      <button onClick={() => dispatch({ type: 'ADD_SPEC' })}>
        <Plus /> Spec ekle
      </button>

      {/* TOTAL */}
      <div className="mt-6 font-bold">
        Toplam: {subtotal} + KDV = {subtotal * (1 + TAX_RATE)}
      </div>

      <button className="mt-4 px-4 py-2 bg-black text-white flex items-center gap-2">
        <Calculator size={16} /> Oluştur
      </button>
    </div>
  );
}