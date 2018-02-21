USE wozudemo;

SELECT phones.Id, PhoneNumber, PhoneTypeId, PhoneType
FROM phones LEFT JOIN phoneTypes ON phones.PhoneTypeId = phonetypes.Id;