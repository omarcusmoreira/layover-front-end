import styled from "styled-components";

export const HotelAccomodationsPage = styled.div`
  max-width: 75rem;
  width:100%;
  margin-top:6rem;
  align-self: center;
`

export const HotelAccomodationsContent = styled.form`
  display:flex;
  flex-direction: column;
  position:relative;
  width:100%;
  margin-top:2rem;
  gap:1.5rem;
`

export const HotelAccomodationsContentRow = styled.div`
  background: #E9ECF2;
  padding: 2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 2rem;
`
export const HotelAccomodationsRowTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #021442;
`

export const HotelAccomodationsRowSubTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5rem;
  color: #021442;
  margin-top:1rem;
`
export const HotelAccomodationsRowInputWrap = styled.div`
  width: 600px;
  margin-top:1rem;
`

export const HotelAccomodationsRowCheckboxWrap = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  margin-bottom: 1rem;
`

export const AccommodationsHotelsModal = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display:flex;
  flex-direction:column;
  max-width: 589px;
  max-height: 364px;

  margin: auto;
  padding: 2rem 27px 22px 27px;

  background: #FFFFFF;
  box-shadow: 1px 3px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
`

export const AccommodationsHotelsModalTitle = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`
export const AccommodationsHotelsModalForm = styled.form`
  display:flex;
  flex-direction:column;
  gap: 16px;
  margin-top:1.5rem;
`
export const AccommodationsHotelsModalFormRow = styled.form`
  display:flex;
  flex-direction:row;
  gap:1rem;
`

export const AccommodationsHotelsModalFormButtonsWrap = styled.form`
  display:flex;
  flex-direction:row;
  gap:1rem;
  margin-top:1.5rem;
  align-self: center;
`

export const ListRoomDescription = styled.ul`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  grid-column-gap:2rem;
  grid-row-gap:2rem;
  margin-top:2rem;
`
export const ActionsButtonsWrap = styled.div`
  display:flex;
  flex-direction:row;
  gap: 1rem;
  margin-bottom:2rem;
`


