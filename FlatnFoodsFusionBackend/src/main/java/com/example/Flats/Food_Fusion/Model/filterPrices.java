package com.example.Flats.Food_Fusion.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class filterPrices {
    private Integer startPrice;
    private Integer endPrice;
}
